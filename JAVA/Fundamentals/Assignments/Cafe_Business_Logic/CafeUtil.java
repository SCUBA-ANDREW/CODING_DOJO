// package JAVA.Fundamentals.Assignments.Cafe_Business_Logic;
import java.util.ArrayList;
import java.util.Arrays;
public class CafeUtil {
    public int getStreakGoal(){
        int temp =0;
        for(int i=0;i<=10;i++){
            temp+=i;
        }
        // System.out.println(temp);
        return temp;
    }
    public double getOrderTotal(double[] prices){
        double sum=0;
        for(int i=0;i<prices.length;i++){
            sum+=prices[i];
        }
        return sum;
    }
    public void displayMenu(ArrayList<String> menuItems){
        for(int i=0;i<menuItems.size();i++){
            System.out.println(i+" "+menuItems.get(i));
        }
    }
    public void addCustomer(ArrayList<String> customers){
        System.out.println("Please enter your name:");
        String userName = System.console().readLine();
        customers.add(userName);
        int count= customers.size()-1;
        System.out.println("Hello, "+userName+"! There are "+count+" people in front of you.");
        System.out.println(customers);

    }

}