import CredentialsProvider from "next-auth/providers/credentials";
import { collectionNames, dbConnect } from "./dbConnect";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        // username: { label: "Username", type: "text", placeholder: "jsmith" },
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials, req) {
        console.log(credentials, "credentials");

        const { username, email, password } = credentials;

        const user = await dbConnect(collectionNames.USERS).findOne({ email });

        const isPasswordOk = password === user.password;
        if (isPasswordOk) {
          return user;
        }
        return null;
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      if (account) {
        // console.log("From SignIn CallBack", { user, account, profile, email, credentials });
        const { email: user_email, image, name } = user;
        const { provider, providerAccountId } = account;
        const payload = { provider, providerAccountId, name, image, email: user_email, role: "user" };

        try {
          console.log(payload);
          const isUserExist = await dbConnect(collectionNames.USERS).findOne({ email: user_email });

          if (!isUserExist) {
            await dbConnect(collectionNames.USERS).insertOne(payload);
          }
        } catch (error) {
          console.log(error);
        }
      }

      return true;
    },
    async session({ session, token, user }) {
      if (token) {
        session.user.email = token.email;
        session.user.role = token.role;
      }
      return session;
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      if (user) {
        token.email = user.email;
        token.role = user.role;
      }
      return token;
    },
  },
};
