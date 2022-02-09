import java.util.ArrayList;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
public class BankAccount {
    private double CheckingBalance;
    private double SavingsBalance;

    public double getCheckingBalance(){
        return this.CheckingBalance;
    }
    public void setCheckingBalance(double CheckingBalance){
        this.CheckingBalance=CheckingBalance;
    }
    public double getSavingsBalance(){
        return this.SavingsBalance;
    }
    public void setSavingsBalance(double SavingsBalance){
        this.SavingsBalance=SavingsBalance;
    }
    public void deposite(String account,double amnt){
        if(account=="Checking"){
            this.setCheckingBalance(this.getCheckingBalance()+amnt);
        }
        else if(account=="Savings"){
            this.setSavingsBalance(this.getSavingsBalance()+amnt);
        }
    }
    public void withdraw(double amnt){
        if(amnt>this.getCheckingBalance()){
            System.out.println("insufficient funds");
        }
        else{
            this.setCheckingBalance(this.getCheckingBalance()-amnt);
        }
    }

    public void displayTotal(){
        double sum = this.getCheckingBalance()+this.getSavingsBalance();
        System.out.println("Your total amount from bot Checking and Savings account is: $"+sum);
    }
}