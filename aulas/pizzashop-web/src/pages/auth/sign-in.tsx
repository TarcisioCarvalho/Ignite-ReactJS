import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { z } from "zod";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Link } from "react-router-dom";

const signInForm = z.object({
  email: z.string().email(),
});

type SignInForm = z.infer<typeof signInForm>

export const SignIn = () => {

  const { register, handleSubmit, formState : { isSubmitting }  } = useForm<SignInForm>();

  async function handleSinIn( data : SignInForm ){
   try {
    console.log(data);
    
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast.success("Enviamos um link de autenticação para o seu e-mail",{
      action :{
        label: "Reenviar",
        onClick: () => handleSinIn(data),
      }
    });
   } catch (error) {
    toast.error("Credenciais Inválidas");
   }
  }


  return (
   <>
   <Helmet title="Login"/>
   <div className="p-8">
    <Button variant={"ghost"} asChild className="absolute top-8 right-8">
      <Link to={"/sign-up"}>
        Novo Estabelecimento
      </Link>
    </Button>
  

    <div className="w-[350px] flex flex-col justify-center gap-6">
      <div className="flex flex-col gap-2 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">Acessar Painel</h1>
        <p className="text-sm text-muted-foreground">
          Acompanhe suas vendas pelo painel do parceiro!
        </p>
      </div>
      <form className="space-y-4" onSubmit={handleSubmit(handleSinIn)}>
        <div className="space-y-2">
            <Label htmlFor="email">Seu e-mail</Label>
            <Input id="email" type="email" {...register("email")}/>
        </div>
        <Button disabled={ isSubmitting } className="w-full" type="submit">
          Acessar Painel
        </Button>
      </form>
    </div>

   </div>
   </>
  )
}
