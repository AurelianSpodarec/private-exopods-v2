import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import { IAuthLogin } from "./services/apis/endpoints/auth"
import Auth0 from "next-auth/providers/auth0";

interface IUserData {
  avatar: string;
  acronym: null;
  id: number;
  username: null;
  name: string;
  email: string;
  status: string;
  joined: string;
}

interface IApiResponse {
  status: string;
  message: null;
  cookies: string;
  data: {
    user: IUserData;
    token: string;
  };
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Auth0({
      clientId: process.env.NEXT_EXO_AUTH0_CLIENT_ID,
      clientSecret: process.env.NEXT_EXO_AUTH0_CLIENT_SECRET,
      issuer: `https://${process.env.NEXT_EXO_AUTH0_DOMAIN}`,
      authorization: {
        params: {
          scope: "openid profile email",
        },
      }
    }),
    // Credentials({
    //   credentials: {
    //     email: {},
    //     password: {},
    //   },
    //   authorize: async (credentials: IAuthLogin, req: IApiResponse) => {
    //     console.log("woooop", credentials)
    //     const { email, password } = credentials
    //     const res:IApiResponse = await authLogin({
    //       email,
    //       password,
    //     })

    //     if (!res) {
    //       throw new Error("User not found.")
    //     }

    //     const data = res?.data
    //     const user = data?.user

    //     return {
    //       token: data.token,
    //       user
    //     }
    //   },
    // }),
  ],
  callbacks: {
    async jwt({ token, account }) {
      // Persist the OAuth access_token to the token right after sign-in
      if (account?.access_token) {
        token.accessToken = account.access_token;
      }
      return token;
    },
    async session({ session, token }) {
      // Add the access token to the session
      if (token.accessToken) {
        session.accessToken = token.accessToken;
      }
      return session;
    },
  },
  // pages: {
    // signIn: '/auth/signin',  // Customize the sign-in page path if needed
  // },
  secret: process.env.NEXTAUTH_SECRET, // Ensure this is defined in your .env file
  session: {
    strategy: "jwt", // Use JWTs for session management
  },
  jwt: {
    secret: process.env.JWT_SECRET, // Ensure this is defined in your .env file
  },
})
