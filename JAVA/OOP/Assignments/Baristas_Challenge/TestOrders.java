import java.util.ArrayList;
public class TestOrders {
    public static void main(String[] args) {
        
    
        // Menu items
        Item item1 = new Item("mocha",5.5);
        Item item2 = new Item("latte",6.5);
        Item item3 = new Item("drip coffe",10.5);
        Item item4 = new Item("capuccino",8);
        // Order variables -- order1, order2 etc.
        Order order1 = new Order("Cindhuri");
        Order order2 = new Order("Jimmy");
        Order order3 = new Order("Noah");
        Order order4 = new Order("Sam");
    
        // Application Simulations
        order2.addItem(item1);
        
        System.out.println(order2.getOrderTotal());

        order3.addItem(item4);;
        

        order4.addItem(item4);;

        order1.setReady(true);

        order4.addItem(item2);
        order4.addItem(item2);

        order2.setReady(true);
        // Use this example code to test various orders' updates
        // System.out.printf("Name: %s\n", order1.name);
        // System.out.printf("Total: %s\n", order1.total);
        // System.out.printf("Ready: %s\n", order1.ready);
    }
}