import { FloatingWhatsApp } from 'react-floating-whatsapp';

function Whatsapp() {

    return (
        <>
            <FloatingWhatsApp
                phoneNumber="+918883336038"
                accountName="Rithu Devi"
                allowEsc
                allowClickAway
                // notification
                // notificationSound
                avatar='WhatsappImg.jpg'
            />
        </>
        
    );
}
export default Whatsapp;