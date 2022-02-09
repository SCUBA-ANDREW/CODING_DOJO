import java.util.ArrayList;
public class TestOrders {
    public static void main(String[] args) {
        
    
        // Menu items
        Item item1 = new Item();
        item1.name="mocha";
        item1.price=5.5;
        Item item2 = new Item();
        item2.name="latte";
        item2.price=6.5;
        Item item3 = new Item();
        item3.name="drip coffee";
        item3.price=10.5;
        Item item4 = new Item();
        item4.name="capuccino";
        item4.price=8;
        // Order variables -- order1, order2 etc.
        Order order1 = new Order();
        order1.name="Cindhuri";
        Order order2 = new Order();
        order2.name="Jimmy";
        Order order3 = new Order();
        order3.name="Noah";
        order3.items= new ArrayList<Item>();
        Order order4 = new Order();
        order4.name="Sam";
        order4.items= new ArrayList<Item>();
    
        // Application Simulations
        order2.items= new ArrayList<Item>();
        order2.items.add(item1);
        for(int i=0;i<order2.items.size();i++){
            order2.total+=order2.items.get(i).price;
        }
        System.out.println(order2.total);

        order3.items.add(item4);
        for(int i=0;i<order3.items.size();i++){
            order3.total+=order3.items.get(i).price;
        }

        order4.items.add(item2);
        for(int i=0;i<order4.items.size();i++){
            order4.total+=order4.items.get(i).price;
        }

        order1.ready=true;

        order4.items.add(item2);
        order4.total+=item2.price;
        order4.items.add(item2);
        order4.total+=item2.price;

        order2.ready=true;
        // Use this example code to test various orders' updates
        // System.out.printf("Name: %s\n", order1.name);
        // System.out.printf("Total: %s\n", order1.total);
        // System.out.printf("Ready: %s\n", order1.ready);
    }
}