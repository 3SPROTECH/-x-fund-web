import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { GoldenButton } from "../ui/GoldenButton";

const formSchema = z.object({
  email: z
    .email({ message: "Veuillez entrer un email valide." }),
});

export function InvestForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { email: "" },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("Données soumises :", values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex gap-2 w-full max-w-lg items-start">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormControl>
                <Input 
                  placeholder="Votre Email ..." 
                  {...field} 
                  className="h-14 border-gray-300 focus-visible:ri  ng-primary" 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <GoldenButton type="submit" className="shrink-0 text px-4">Investir Maintenant</GoldenButton>
      </form>
    </Form>
  );
}