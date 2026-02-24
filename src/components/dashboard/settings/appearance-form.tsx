'use client'

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Card, CardContent } from "@/components/ui/card"
import { useToast } from "@/hooks/use-toast"

const appearanceFormSchema = z.object({
  theme: z.enum(["light", "dark"], {
    required_error: "Please select a theme.",
  }),
})

type AppearanceFormValues = z.infer<typeof appearanceFormSchema>

export function AppearanceForm() {
    const { toast } = useToast()
  const form = useForm<AppearanceFormValues>({
    resolver: zodResolver(appearanceFormSchema),
    defaultValues: { theme: "light" },
  })

  function onSubmit(data: AppearanceFormValues) {
     toast({
      title: "Appearance Updated",
      description: `Theme set to ${data.theme}.`,
    })
  }

  return (
    <Card>
        <CardContent>
            <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 pt-6">
                <FormField
                control={form.control}
                name="theme"
                render={({ field }) => (
                    <FormItem className="space-y-3">
                    <FormLabel>Theme</FormLabel>
                    <FormDescription>
                        Select the theme for the dashboard.
                    </FormDescription>
                    <FormControl>
                        <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex flex-col space-y-1"
                        >
                        <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                            <RadioGroupItem value="light" />
                            </FormControl>
                            <FormLabel className="font-normal">
                            Light
                            </FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                            <RadioGroupItem value="dark" />
                            </FormControl>
                            <FormLabel className="font-normal">
                            Dark
                            </FormLabel>
                        </FormItem>
                        </RadioGroup>
                    </FormControl>
                    </FormItem>
                )}
                />

                <Button type="submit">Update Appearance</Button>
            </form>
            </Form>
        </CardContent>
    </Card>

  )
}
