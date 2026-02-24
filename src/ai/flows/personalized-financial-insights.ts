'use server';
/**
 * @fileOverview A Genkit flow for an AI Financial Assistant that analyzes spending patterns and income to provide personalized insights and actionable recommendations.
 *
 * - personalizeFinancialInsights - A function that handles the financial insights generation process.
 * - PersonalizedFinancialInsightsInput - The input type for the personalizeFinancialInsights function.
 * - PersonalizedFinancialInsightsOutput - The return type for the personalizeFinancialInsights function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PersonalizedFinancialInsightsInputSchema = z.object({
  spendingPatterns: z.string().describe('A detailed description of the user\'s spending habits and categories.'),
  income: z.string().describe('A detailed description of the user\'s income sources and amounts.'),
  financialGoals: z.string().optional().describe('Optional description of the user\'s financial goals (e.g., saving for a house, retirement).'),
});
export type PersonalizedFinancialInsightsInput = z.infer<typeof PersonalizedFinancialInsightsInputSchema>;

const PersonalizedFinancialInsightsOutputSchema = z.object({
  insights: z.string().describe('Personalized financial insights based on spending patterns and income.'),
  recommendations: z.string().describe('Actionable recommendations and tips for budget adjustments, savings, and reaching financial goals.'),
});
export type PersonalizedFinancialInsightsOutput = z.infer<typeof PersonalizedFinancialInsightsOutputSchema>;

export async function personalizeFinancialInsights(input: PersonalizedFinancialInsightsInput): Promise<PersonalizedFinancialInsightsOutput> {
  return personalizedFinancialInsightsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'personalizedFinancialInsightsPrompt',
  input: {schema: PersonalizedFinancialInsightsInputSchema},
  output: {schema: PersonalizedFinancialInsightsOutputSchema},
  prompt: `You are an AI Financial Assistant for Horizon Bank. Your task is to analyze a customer's spending patterns and income to provide personalized financial insights and actionable recommendations.

Here is the customer's financial information:

Spending Patterns: {{{spendingPatterns}}}
Income: {{{income}}}

{{#if financialGoals}}
Financial Goals: {{{financialGoals}}}
{{/if}}

Based on this information, provide:
1. Personalized insights into their financial situation.
2. Actionable recommendations for budget adjustments, savings tips, and strategies to achieve their financial goals.`,
});

const personalizedFinancialInsightsFlow = ai.defineFlow(
  {
    name: 'personalizedFinancialInsightsFlow',
    inputSchema: PersonalizedFinancialInsightsInputSchema,
    outputSchema: PersonalizedFinancialInsightsOutputSchema,
  },
  async (input) => {
    const {output} = await prompt(input);
    return output!;
  }
);
