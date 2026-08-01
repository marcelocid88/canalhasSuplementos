    package exercicios_arrays;

    import java.util.Scanner;

    public class ex2 {
        public static void main(String[] args) throws Exception {
            
            int soma=0;
            float media=0;
            int[] numeros = new int[6];
            Scanner leia = new Scanner(System.in);
            System.out.println("**************************");
            System.out.println("LEITOR E ANALISADOR DE NÚMEROS");

            //Laço para criar o array
            for(int i=0; i<numeros.length; i++){
                System.out.println("Digite o termo "+(i+1)+" : ");
                numeros[i] = leia.nextInt();
                soma = soma + numeros[i];
                                
            }

            media = (float) (soma/numeros.length);
            System.out.println("A soma dos termos é: "+soma);
            System.out.println("A média calculada dos termos é: "+media);
            
            //Laço para mostrar valores específicos Pares
            System.out.println("Números Pares: ");
            for (int i=0; i<numeros.length; i++)
                if (numeros[i]%2==0) {
                    System.out.print(numeros[i] + " ");
            }
            System.out.println();
            
            //Laço para mostrar valores nos índices ímpares
            System.out.println("Números nas posições ímpares do vetor : ");
            for (int i=1; i<numeros.length; i++) {
                System.out.print(numeros[i] + " ");
                i++;
            }
            System.out.println();
                
            }

    }
