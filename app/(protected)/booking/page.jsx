"use client"
import emailjs from 'emailjs-com';
import {
    Card,
    CardHeader, 
    CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button"
import { useState, useRef, useEffect } from "react";


const BookingPage = () => {
    const pickupInputRef = useRef(null)
    const dropoffInputRef = useRef(null)

    const apiKey = 'tQSG_Rs2blISwvPAo'

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
        });

    const [pickupLocation, setPickupLocation] = useState('')
    const [dropoffLocation, setDropoffLocation] = useState('')
    const [weight, setWeight] = useState('')
    const [height, setHeight] = useState('')
    const [length, setLength] = useState('')
    const [width, setWidth] = useState('')

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        switch (name) {
            case 'pickupLocation':
                setPickupLocation(value)
            break;
            case 'dropoffLocation':
                setDropoffLocation(value)
            break;
            case 'width':
                setWidth(value)
            break;
            case 'weight':
                setWeight(value)
            break;
            case 'length':
                setLength(value)
            break;
            case 'height':
                setHeight(value)
            break;
            default:
                break;
        }
        console.log("pickupLocation", pickupLocation);
        console.log("dropoffLocation", dropoffLocation);
        console.log("width", width);
        console.log("weight", weight);
        console.log("length", length);
        console.log("height", height);
    }

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission behavior
    
        emailjs.send('service_scrp2t7', 'template_iv3xwge', apiKey)
            .then((result) => {
                console.log('Email sent successfully:', result.text);

                // Reset form fields
                setPickupLocation('');
                setDropoffLocation('');
                setWeight('');
                setWidth('');
                setLength('');
                setHeight('');
                // Display alert message
                alert('Your shipment reqest has been submitted. Kindly get your shipment details in your mail.');
                // Refresh the page
                window.location.reload();
            }, (error) => {
                console.error('Error sending email:', error.text);
            });
    }

  return (
    <div>
      <Card className="w-full md:w-[600px]">
      <CardHeader>
        <p className="text-2xl font-semibold text-center">
          Book A Shipment
        </p>
      </CardHeader>
      <CardContent>
        <form
        className="space-y-6"
        onSubmit={handleSubmit}
        >
        <div className="space-y-4 flex flex-col gap-3">
            <label className="flex flex-col text-[12px]">
                Pick Up Address:
                <input type='text' ref={pickupInputRef} value={pickupLocation} onChange={handleInputChange} id="pickupLocation" name="pickupLocation" className="border-gray-200 py-1 text-[16px] px-3 rounded-lg shadow-sm border-[1px]" placeholder='Start Typing a Pickup Location...' />
            </label>
            <label className="flex flex-col text-[12px]">
                Drop Off Address:
                <input type='text' ref={dropoffInputRef} value={dropoffLocation} onChange={handleInputChange} id="dropoffLocation" name="dropoffLocation" className="border-gray-200 py-1 text-[16px] px-3 rounded-lg shadow-sm border-[1px]" placeholder='Start Typing a Pickup Location...' />
            </label>
            <label className="flex flex-col text-[12px]">
                Weight:
                <input type='number' min={0} value={weight} onChange={handleInputChange} id="weight" name="weight" className="border-gray-200 text-[16px] py-1 px-3 rounded-lg shadow-sm border-[1px]" placeholder='Weight of parcel in kg' />
            </label>
            <label className="flex flex-col text-[12px]">
                Height:
                <input type='number' min={0} value={height} onChange={handleInputChange} id="height" name="height" className="border-gray-200 text-[16px] py-1 px-3 rounded-lg shadow-sm border-[1px]" placeholder='Height of parcel in cm' />
            </label>
            <label className="flex flex-col text-[12px]">
                Width:
                <input type='number' min={0} value={width} onChange={handleInputChange} id="width" name="width" className="border-gray-200 text-[16px] py-1 px-3 rounded-lg shadow-sm border-[1px]" placeholder='Width of parcel in cm' />
            </label>
            <label className="flex flex-col text-[12px]">
                Width:
                <input type='number' min={0} value={length} onChange={handleInputChange} id="length" name="length" className="border-gray-200 text-[16px] py-1 px-3 rounded-lg shadow-sm border-[1px]" placeholder='Length of parcel in cm' />
            </label>
        </div>
        <Button
            type="submit"
        >
            Confirm Shipment
        </Button>
        </form>
      </CardContent>
    </Card>
    </div>
  )
}

export default BookingPage
