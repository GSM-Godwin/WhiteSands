"use client";
import emailjs from 'emailjs-com';
import {
    Card,
    CardHeader,
    CardContent,
} from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
import { useState, useRef, useEffect } from "react";
import { useCurrentUser } from "@/hooks/use-current-user";
// import { createPost } from '@/actions/posts';
// import { db } from '@/lib/db';
import Book from '../posts/page';

const calculateShippingCost = ({
    weight,
    length,
    width,
    isDangerousGoods = false,
    isLiveAnimals = false,
    isHumanRemains = false,
    isVehicle = false,
    isSeaFreight = false
}) => {
    const brokerageBase = 50.00;
    let airFreightCharge = 0;
    let freightCharge = 0;

    // Check if the cargo is oversize
    const isOversize = length > 48 || width > 48;

    if (isVehicle || isSeaFreight) {
        return 'To be determined';
    }

    // Calculate the air freight charge
    if (weight <= 20) {
        airFreightCharge = 15.00;
    } else if (weight <= 99) {
        airFreightCharge = weight * 1.00;
    } else {
        airFreightCharge = weight * 0.85;
    }

    // Determine the base freight charge
    freightCharge = airFreightCharge;

    // Apply additional charges for special cargo
    if (isDangerousGoods) {
        freightCharge += 100.00;
    }
    if (isLiveAnimals) {
        freightCharge *= 1.75;
    }
    if (isHumanRemains) {
        freightCharge *= 2; // 100% of freight charge
    }

    // Calculate the total cost
    const totalCost = brokerageBase + freightCharge;

    return totalCost;
};

const BookingPage = ({ children }) => {
    const user = useCurrentUser();
    // const posts = db.post.findMany()

    const pickupInputRef = useRef(null);
    const dropoffInputRef = useRef(null);

    const apiKey = 'tQSG_Rs2blISwvPAo';

    useEffect(() => {
        // Initialize the autocomplete for the pickup input field
        const pickupAutocomplete = new window.google.maps.places.Autocomplete(pickupInputRef.current);
        pickupAutocomplete.setFields(['formatted_address']);
        pickupAutocomplete.addListener('place_changed', () => {
            const place = pickupAutocomplete.getPlace();
            if (!place.formatted_address) {
                return;
            }
            setPickupLocation(place.formatted_address); // Update state variable
        });

        // Initialize the autocomplete for the drop-off input field
        const dropoffAutocomplete = new window.google.maps.places.Autocomplete(dropoffInputRef.current);
        dropoffAutocomplete.setFields(['formatted_address']);
        dropoffAutocomplete.addListener('place_changed', () => {
            const place = dropoffAutocomplete.getPlace();
            if (!place.formatted_address) {
                return;
            }
            setDropoffLocation(place.formatted_address); // Update state variable
        });
    }, []);

    const [pickupLocation, setPickupLocation] = useState('');
    const [dropoffLocation, setDropoffLocation] = useState('');
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [length, setLength] = useState('');
    const [width, setWidth] = useState('');
    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [phone, setPhone] = useState(user.phone);
    const [id, setId] = useState(user.id);
    const [isDangerousGoods, setIsDangerousGoods] = useState(false);
    const [isLiveAnimals, setIsLiveAnimals] = useState(false);
    const [isHumanRemains, setIsHumanRemains] = useState(false);
    const [isSeaFreight, setIsSeaFreight] = useState(false);
    const [totalCost, setTotalCost] = useState(0);

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        switch (name) {
            case 'pickupLocation':
                setPickupLocation(value);
                break;
            case 'dropoffLocation':
                setDropoffLocation(value);
                break;
            case 'width':
                setWidth(value);
                break;
            case 'weight':
                setWeight(value);
                break;
            case 'length':
                setLength(value);
                break;
            case 'height':
                setHeight(value);
                break;
            case 'name':
                setName(value);
                break;
            case 'id':
                setId(value);
                break;
            case 'email':
                setEmail(value);
                break;
            case 'phone':
                setPhone(value);
                break;
            case 'isDangerousGoods':
                setIsDangerousGoods(checked);
                break;
            case 'isLiveAnimals':
                setIsLiveAnimals(checked);
                break;
            case 'isHumanRemains':
                setIsHumanRemains(checked);
                break;
            case 'isSeaFreight':
                setIsSeaFreight(checked);
                break;
            default:
                break;
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission behavior
        const cost = calculateShippingCost({
            weight: parseFloat(weight),
            length: parseFloat(length),
            width: parseFloat(width),
            isDangerousGoods,
            isLiveAnimals,
            isHumanRemains,
            isSeaFreight
        });

        const templateParams = {
            to: 'godwinaliu39@gmail.com', // Use the email from the form field as the recipient
            pickupLocation,
            dropoffLocation,
            weight,
            height,
            length,
            width,
            name,
            id,
            email,
            phone,
            totalCost: cost === 'To be determined' ? cost : `$${cost}`,
            isDangerousGoods: isDangerousGoods ? 'Yes' : 'No',
            isLiveAnimals: isLiveAnimals ? 'Yes' : 'No',
            isHumanRemains: isHumanRemains ? 'Yes' : 'No',
            isSeaFreight: isSeaFreight ? 'Yes' : 'No'
        };

        emailjs.init(apiKey);
        emailjs.send('service_scrp2t7', 'template_iv3xwge', templateParams)
            .then((result) => {
                console.log('Email sent successfully:', result.text);

                // Reset form fields
                setPickupLocation('');
                setDropoffLocation('');
                setWeight('');
                setWidth('');
                setLength('');
                setHeight('');
                setIsDangerousGoods(false);
                setIsLiveAnimals(false);
                setIsHumanRemains(false);
                setIsSeaFreight(false);
                setTotalCost('');

                // Display alert message
                alert('Your shipment request has been submitted. Kindly check your email for the shipment details.');
                // Refresh the page
                window.location.reload();
            }, (error) => {
                console.error('Error sending email:', error.text);
            });
    };

    useEffect(() => {
        const cost = calculateShippingCost({
            weight: (weight),
            length: (length),
            width: (width),
            isDangerousGoods,
            isLiveAnimals,
            isHumanRemains,
            isSeaFreight
        });
        setTotalCost(cost);
    }, [weight, length, width, isDangerousGoods, isLiveAnimals, isHumanRemains, isSeaFreight]);

    return (
        <div className='w-full'>
            <Card className="w-full">
                <CardHeader>
                    <p className="text-2xl font-semibold text-center">
                        Book A Shipment
                    </p>
                </CardHeader>
                <CardContent>
                    {/* <form
                        className="space-y-6"
                        action={createPost}
                        onSubmit={handleSubmit}
                    >
                        <div className="space-y-4 flex flex-col gap-3">
                            <label className="flex flex-col text-[12px]">
                                Pick Up Address:
                                <input type='text' ref={pickupInputRef} value={pickupLocation} onChange={handleInputChange} id="pickupLocation" name="pickupLocation" className="border-gray-200 py-1 font-light text-primary text-[16px] px-3 rounded-lg shadow-sm border-[1px]" placeholder='Start Typing a Pickup Location...' />
                            </label>
                            <label className="flex flex-col text-[12px]">
                                Drop Off Address:
                                <input type='text' ref={dropoffInputRef} value={dropoffLocation} onChange={handleInputChange} id="dropoffLocation" name="dropoffLocation" className="border-gray-200 py-1 font-light text-primary text-[16px] px-3 rounded-lg shadow-sm border-[1px]" placeholder='Start Typing a Dropoff Location...' />
                            </label>
                            <label className="flex flex-col text-[12px]">
                                Weight:
                                <input type='text' value={weight} onChange={handleInputChange} id="weight" name="weight" className="border-gray-200 text-[16px] py-1 font-light text-primary px-3 rounded-lg shadow-sm border-[1px]" placeholder='Weight of parcel in lbs' />
                            </label>
                            <label className="flex flex-col text-[12px]">
                                Height:
                                <input type='text' value={height} onChange={handleInputChange} id="height" name="height" className="border-gray-200 text-[16px] py-1 font-light text-primary px-3 rounded-lg shadow-sm border-[1px]" placeholder='Height of parcel in inches' />
                            </label>
                            <label className="flex flex-col text-[12px]">
                                Width:
                                <input type='text' value={width} onChange={handleInputChange} id="width" name="width" className="border-gray-200 text-[16px] py-1 font-light text-primary px-3 rounded-lg shadow-sm border-[1px]" placeholder='Width of parcel in inches' />
                            </label>
                            <label className="flex flex-col text-[12px]">
                                Length:
                                <input type='text' value={length} onChange={handleInputChange} id="length" name="length" className="border-gray-200 text-[16px] py-1 font-light text-primary px-3 rounded-lg shadow-sm border-[1px]" placeholder='Length of parcel in inches' />
                            </label>
                            <label className="flex flex-col text-[12px]">
                                Dangerous Goods:
                                <input type='checkbox' checked={isDangerousGoods} onChange={handleInputChange} id="isDangerousGoods" name="isDangerousGoods" />
                            </label>
                            <label className="flex flex-col text-[12px]">
                                Live Animals:
                                <input type='checkbox' checked={isLiveAnimals} onChange={handleInputChange} id="isLiveAnimals" name="isLiveAnimals" />
                            </label>
                            <label className="flex flex-col text-[12px]">
                                Human Remains:
                                <input type='checkbox' checked={isHumanRemains} onChange={handleInputChange} id="isHumanRemains" name="isHumanRemains" />
                            </label>
                            <label className="flex flex-col text-[12px]">
                                Sea Freight:
                                <input type='checkbox' checked={isSeaFreight} onChange={handleInputChange} id="isSeaFreight" name="isSeaFreight" />
                            </label>
                            <label className="hidden flex-col text-[12px]">
                                Name:
                                <input type='text' value={name} readOnly onChange={handleInputChange} id="name" name="name" className="border-gray-200 text-[16px] py-1 font-light text-primary px-3 rounded-lg shadow-sm border-[1px]" />
                            </label>
                            <label className="hidden flex-col text-[12px]">
                                ID:
                                <input type='text' value={id} readOnly onChange={handleInputChange} id="id" name="id" className="border-gray-200 text-[16px] py-1 font-light text-primary px-3 rounded-lg shadow-sm border-[1px]" />
                            </label>
                            <label className="hidden flex-col text-[12px]">
                                Email:
                                <input type='email' value={email} readOnly onChange={handleInputChange} id="email" name="email" className="border-gray-200 text-[16px] py-1 font-light text-primary px-3 rounded-lg shadow-sm border-[1px]" />
                            </label>
                            <label className="hidden flex-col text-[12px]">
                                Phone:
                                <input type='tel' value={phone} readOnly onChange={handleInputChange} id="phone" name="phone" className="border-gray-200 text-[16px] py-1 font-light text-primary px-3 rounded-lg shadow-sm border-[1px]" />
                            </label>
                        </div>
                        <div className="text-center text-lg font-semibold">
                            Estimated Shipping Cost: {totalCost === 'To be determined' ? totalCost : `$${totalCost}`}
                        </div>
                        <Button
                            type="submit"
                        >
                            Confirm Shipment
                        </Button>
                    </form> */}
                    <Book />
                </CardContent>
            </Card>
        </div>
    );
};

export default BookingPage;
