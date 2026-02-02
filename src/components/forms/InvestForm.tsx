import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

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
                  className="h-12 rounded-full border-gray-300 focus-visible:ring-primary" 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        

        <Button 
          type="submit" 
          className="bg-primary hover:bg-primary/90 h-12 rounded-full text-white font-semibold px-4 text-sm sm:px-8 sm:text-base shrink-0"
        >
          Investir
        </Button>
      </form>
    </Form>
  );
}