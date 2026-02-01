import CardWithHeader from "../ui/card-with-header";

const OrderInformation = () => {
    return (
        <CardWithHeader title="Order Information">
            <div className="p-5">
                <div className="input-group">
                    <label htmlFor="full-name">Full Name</label>
                    <input type="text" placeholder="type Your Full Name" id="full-name"/>
                </div>
                <div className="input-group">
                    <label htmlFor="whatsapp-number">Whatsapp Number</label>
                    <input type="text" placeholder="type Your Whatsapp Number" id="whatsapp-number"/>
                </div>
                <div className="input-group">
                    <label htmlFor="shipping-address">Shipping Address</label>
                    <textarea placeholder="Type Your Shipping Address" id="shipping-address" rows={7}/>
                </div>
            </div>  
        </CardWithHeader>
    )
}

export default OrderInformation;