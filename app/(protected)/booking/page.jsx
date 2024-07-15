"use client";
import {
    Card,
    CardHeader,
    CardContent,
} from "@/components/ui/card";
import Book from '../posts/page';


const BookingPage = () => {
    return (
        <div className='w-full'>
            <Card className="w-full">
                <CardHeader>
                    <p className="text-2xl font-semibold text-center">
                        Book A Shipment
                    </p>
                </CardHeader>
                <CardContent>
                    <Book />
                </CardContent>
            </Card>
        </div>
    );
};

export default BookingPage;
