import { api } from "@/lib/axios";

export interface SignInBody{
    email : string,
}

export async function signIn( { email } : SignInBody ){
    console.log(email);
    await api.post("/authenticate", { email });
};