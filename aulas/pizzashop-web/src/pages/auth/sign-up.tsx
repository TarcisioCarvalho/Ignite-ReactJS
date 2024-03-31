import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { z } from "zod";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { registerRestaurant } from "@/api/register-restaurant";

const SignUpForm = z.object({
  restaurantName: z.string(),
  managerName: z.string(),
  phone: z.string(),
  email: z.string().email(),
});

type SignUpForm = z.infer<typeof SignUpForm>;

export const SignUp = () => {
  
  const navigate = useNavigate();

  const { register, handleSubmit, formState : { isSubmitting }  } = useForm<SignUpForm>();

  const { mutateAsync : registerRestaurantFn } = useMutation({
    mutationFn : registerRestaurant
  });

  async function handleSinIn( data : SignUpForm ){
   try {

    
    await registerRestaurantFn({
      restaurantName : data.restaurantName,
      managerName : data.managerName,
      email: data.email,
      phone: data.phone
    })

    toast.success("Estabelecimento cadastrado com sucesso !",{
      action :{
        label: "Login",
        onClick: () => navigate(`/sign-in?email=${data.email}`),
      }
    });

   } catch (error) {
    toast.error("Erro ao cadastrar restaurante");
   }
  }


  return (
   <>
   <Helmet title="Cadastro"/>
   <div className="p-8">
   <Button variant={"ghost"} asChild className="absolute top-8 right-8">
      <Link to={"/sign-in"}>
        Fazer Login
      </Link>
    </Button>
    <div className="w-[350px] flex flex-col justify-center gap-6">
      <div className="flex flex-col gap-2 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">Criar Conta Grátis</h1>
        <p className="text-sm text-muted-foreground">
          Seja um Parceiro e comece suas vendas!
        </p>
      </div>
      <form className="space-y-4" onSubmit={handleSubmit(handleSinIn)}>
        <div className="space-y-2">
            <Label htmlFor="restaurantName">Nome do Estabelecimento</Label>
            <Input id="restaurantName" type="text" {...register("restaurantName")}></Input>
        </div>
        <div className="space-y-2">
            <Label htmlFor="managerName">Seu nome</Label>
            <Input id="managerName" type="text" {...register("managerName")}/>
        </div>
        <div className="space-y-2">
            <Label htmlFor="email">Seu e-mail</Label>
            <Input id="email" type="email" {...register("email")}/>
        </div>
        <div className="space-y-2">
            <Label htmlFor="phone">Seu celular</Label>
            <Input id="phone" type="tel" {...register("phone")}/>
        </div>
        <Button disabled={ isSubmitting } className="w-full" type="submit">
          Finalizar Cadastro
        </Button>

        <p className="px-6 text-center text-sm leading-relaxed text-muted-foreground">
            Ao continuar, você concorda com nossos 
            <a className="underline underline-offset-4" href="">termos de serviços</a> e {" "} <a className="underline underline-offset-4" href="">políticas de privacidade.</a>
        </p>
      </form>
    </div>

   </div>
   </>
  )
}
