package exercicios_arrays;

import java.util.Scanner;

public class ex3 {

    public static void main(String[] args) throws Exception{
    
    float[] numeros = new float[5];
    int seletor = 0;
    Scanner leia = new Scanner(System.in);
    
    for (int i = 0; i<numeros.length; i++) {
        System.out.println("Digite o "+(i+1)+" termo: ");
        numeros[i] = leia.nextFloat();
    }

    do {
        System.out.println("Selecione uma opção\n1 - Mostrar vetor na ordem original\n2 - Mostrar vetor invertido\n0 - Encerrar");
        seletor = leia.nextInt();
        
        switch (seletor) {
            
            case 1:
                for (int i=0; i < numeros.length; i++) {
                    System.out.println(numeros[i] + " ");
                }
            break;
            
            case 2:
                for (int i = numeros.length - 1; i >= 0; i--){
                    System.out.println(numeros[i] + " ");
                }
            break;
            
            case 0:
            break;

            default:
                System.out.println("OPÇÃO INVÁLIDA");
            break;
        }
    System.out.println();
    } while (seletor!=0);

    System.out.println("PROGRAMA FINALIZADO!");
    
    }

}
