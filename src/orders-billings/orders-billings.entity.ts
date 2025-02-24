import { Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Order } from '../orders/order.entity';
import { Billing } from '../billings/billing.entity';

@Entity('orders_billings')
export class OrdersBillings {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Billing)
    billing: Billing;

    @ManyToOne(() => Order)
    order: Order;
}
