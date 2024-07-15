import { Status, YesNo } from "@prisma/client"
import { createPost } from "@/actions/posts"
import { useEffect, useRef, useState } from "react";
import { useCurrentUser } from "@/hooks/use-current-user";
import emailjs from 'emailjs-com';

const calculateShippingCost = ({
  weight,
  length,
  width,
  isDangerousGoods = false,
  isLiveAnimals = false,
  isHumanRemains = false,
}) => {
  const brokerageBase = 50.00;
  let airFreightCharge = 0;
  let freightCharge = 0;

  const isOversize = length > 48 || width > 48;

  if (weight <= 20) {
      airFreightCharge = 15.00;
  } else if (weight <= 99) {
      airFreightCharge = weight * 1.00;
  } else {
      airFreightCharge = weight * 0.85;
  }

  freightCharge = airFreightCharge;

  if (isDangerousGoods) {
      freightCharge += 100.00;
  }
  if (isLiveAnimals) {
      freightCharge *= 1.75;
  }
  if (isHumanRemains) {
      freightCharge *= 2;
  }

  const totalCost = brokerageBase + freightCharge;

  return totalCost;
};

const Page = () => {
  const user = useCurrentUser();
  const pickupInputRef = useRef(null);
  const dropoffInputRef = useRef(null);

  const apiKey = 'tQSG_Rs2blISwvPAo';

  useEffect(() => {
    const pickupAutocomplete = new window.google.maps.places.Autocomplete(pickupInputRef.current);
    pickupAutocomplete.setFields(['formatted_address']);
    pickupAutocomplete.addListener('place_changed', () => {
      const place = pickupAutocomplete.getPlace();
      if (!place.formatted_address) {
        return;
      }
      setPickupLocation(place.formatted_address);
    });

    const dropoffAutocomplete = new window.google.maps.places.Autocomplete(dropoffInputRef.current);
    dropoffAutocomplete.setFields(['formatted_address']);
    dropoffAutocomplete.addListener('place_changed', () => {
      const place = dropoffAutocomplete.getPlace();
      if (!place.formatted_address) {
        return;
      }
      setDropoffLocation(place.formatted_address);
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
  const [isDangerousGoods, setIsDangerousGoods] = useState(YesNo.NO);
  const [isLiveAnimals, setIsLiveAnimals] = useState(YesNo.NO);
  const [isHumanRemains, setIsHumanRemains] = useState(YesNo.NO);
  const [totalCost, setTotalCost] = useState(0);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
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
        setIsDangerousGoods(value);
        break;
      case 'isLiveAnimals':
        setIsLiveAnimals(value);
        break;
      case 'isHumanRemains':
        setIsHumanRemains(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    const cost = calculateShippingCost({
      weight: parseFloat(weight),
      length: parseFloat(length),
      width: parseFloat(width),
      isDangerousGoods: isDangerousGoods === 'YES',
      isLiveAnimals: isLiveAnimals === 'YES',
      isHumanRemains: isHumanRemains === 'YES',
    });

    const templateParams = {
      to: 'godwinaliu39@gmail.com',
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
      isDangerousGoods: isDangerousGoods,
      isLiveAnimals: isLiveAnimals,
      isHumanRemains: isHumanRemains,
    };

    emailjs.init(apiKey);
    emailjs.send('service_scrp2t7', 'template_iv3xwge', templateParams)
      .then((result) => {
        console.log('Email sent successfully:', result.text);
        alert('Your shipment request has been submitted. Kindly check your email for the shipment details.');
        window.location.reload();
      }, (error) => {
        console.error('Error sending email:', error.text);
      });
  };

  useEffect(() => {
    const cost = calculateShippingCost({
      weight: parseFloat(weight),
      length: parseFloat(length),
      width: parseFloat(width),
      isDangerousGoods: isDangerousGoods === 'YES',
      isLiveAnimals: isLiveAnimals === 'YES',
      isHumanRemains: isHumanRemains === 'YES',
    });
    setTotalCost(cost);
  }, [weight, length, width, isDangerousGoods, isLiveAnimals, isHumanRemains]);

  return (
    <div>
      <form action={createPost} onSubmit={handleSubmit} className="flex flex-col gap-2">
        <label htmlFor="name" className='hidden font-bold'>
          Name
          <input type="text" name="name" value={name} readOnly onChange={handleInputChange} id="name" placeholder="Name" className="px-2 py-1 rounded-sm border-2 border-gray-500" />
        </label>
        <label htmlFor="weight" className='flex flex-col'>
          Weight
          <input type="text" name="weight" value={weight} onChange={handleInputChange} id="weight" placeholder="Weight" className="px-2 py-1 rounded-sm border-2 border-gray-500" />
        </label>
        <label htmlFor="height" className='flex flex-col'>
          Height
          <input type="text" name="height" value={height} onChange={handleInputChange} id="height" placeholder="Height" className="px-2 py-1 rounded-sm border-2 border-gray-500" />
        </label>
        <label htmlFor="length" className='flex flex-col'>
          Length
          <input type="text" name="length" value={length} onChange={handleInputChange} id="length" placeholder="Length" className="px-2 py-1 rounded-sm border-2 border-gray-500" />
        </label>
        <label htmlFor="width" className='flex flex-col'>
          Width
          <input type="text" name="width" value={width} onChange={handleInputChange} id="width" placeholder="Width" className="px-2 py-1 rounded-sm border-2 border-gray-500" />
        </label>
        <label htmlFor="pickupLocation" className='flex flex-col'>
          Pickup Location
          <input type="text" name="pickupLocation" ref={pickupInputRef} value={pickupLocation} onChange={handleInputChange} id="pickupLocation" placeholder="Pickup Location" className="px-2 py-1 rounded-sm border-2 border-gray-500" />
        </label>
        <label htmlFor="dropoffLocation" className='flex flex-col'>
          Dropoff Location
          <input type="text" name="dropoffLocation" ref={dropoffInputRef} value={dropoffLocation} onChange={handleInputChange} id="dropoffLocation" placeholder="Dropoff Location" className="px-2 py-1 rounded-sm border-2 border-gray-500" />
        </label>
        <label htmlFor="isDangerousGoods" className='flex flex-col'>
          Dangerous Goods
          <select name="isDangerousGoods" value={isDangerousGoods} onChange={handleInputChange} className="px-2 py-1 rounded-sm border-2 border-gray-500">
            <option value={YesNo.NO}>No</option>
            <option value={YesNo.YES}>Yes</option>
          </select>
        </label>
        <label htmlFor="isLiveAnimals" className='flex flex-col'>
          Live Animals
          <select name="isLiveAnimals" value={isLiveAnimals} onChange={handleInputChange} className="px-2 py-1 rounded-sm border-2 border-gray-500">
            <option value={YesNo.NO}>No</option>
            <option value={YesNo.YES}>Yes</option>
          </select>
        </label>
        <label htmlFor="isHumanRemains" className='flex flex-col'>
          Human Remains
          <select name="isHumanRemains" value={isHumanRemains} onChange={handleInputChange} className="px-2 py-1 rounded-sm border-2 border-gray-500">
            <option value={YesNo.NO}>No</option>
            <option value={YesNo.YES}>Yes</option>
          </select>
        </label>
        <select name="status" className="px-2 py-1 hidden rounded-sm border-2 border-gray-500">
          <option value={Status.PENDING}>Pending</option>
          <option value={Status.PICKEDUP}>Picked Up</option>
          <option value={Status.SHIPPED}>Shipped</option>
          <option value={Status.CUSTOMS}>In Customs</option>
          <option value={Status.WAREHOUSE}>In Warehouse</option>
          <option value={Status.DELIVERED}>Ready for Pickup</option>
        </select>
        <label htmlFor="price" className='flex flex-col'>
          Price ($)
          <input type="text" name="price" placeholder="price" value={totalCost || 0} readOnly className="px-2 py-1 rounded-sm border-2 border-gray-500" />
        </label>
        <button type="submit" className="border-gray-500 border-2 py-2 rounded-sm w-max p-3">Book Shipment</button>
      </form>
    </div>
  );
}

export default Page;
