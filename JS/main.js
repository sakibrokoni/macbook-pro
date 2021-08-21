// Funtions
 //Get Every Cost innerText


function extraCost(btnID)
{
    const memoryCost= document.getElementById('memory-cost');
    const storageCost= document.getElementById('storage-cost');
    const deliveryCost= document.getElementById('delivery-cost');
    const memoryCost8gb= 0;
    const memoryCost16gb= 180;
    const storageCost256gb=0;
    const storageCost512gb=100;
    const storageCost1024gb= 180;
    const deliveryCostFree=0;
    const deliveryCostCharge=20;

    if(btnID=='memory-btn-8gb' || btnID=='memory-btn-16gb' )
    {
        if(btnID=='memory-btn-8gb')
        {
            memoryCost.innerText=memoryCost8gb;
        }
        else
        {
            memoryCost.innerText=memoryCost16gb;
        }
    }
    else if(btnID=='storage-btn-256gb' || btnID=='storage-btn-512gb' || btnID=='storage-btn-1024gb')
    {
        if(btnID=='storage-btn-256gb')
        {
            storageCost.innerText=storageCost256gb;
        }
        else if(btnID=='storage-btn-512gb')
        {
            storageCost.innerText=storageCost512gb;
        }
        else
        {
            storageCost.innerText=storageCost1024gb;
        }
    }
    else if(btnID== 'delivery-btn-free' || btnID== 'delivery-btn-charge')
    {
        if(btnID=='delivery-btn-free')
        {
            deliveryCost.innerText= deliveryCostFree;
        }
        else
        {
            deliveryCost.innerText= deliveryCostCharge; 
            
        }
    }
    totalPrice();
    
}


// Total Counting 

function totalPrice()
{
    
    let newTotalPrice=document.getElementById('total-price');
    let overAllPrice=document.getElementById('overall-price');
    let promoCode = document.getElementById('promo-code')

    const bestPrice = 1299;

    // Get Last Update Price For Every Items 
    let totalPrice=parseInt(bestPrice) + getCurrentPrice('memory-cost')+getCurrentPrice('storage-cost')+getCurrentPrice('delivery-cost');

    // Get Value from PromCode And Check. Then Apply Total
    if(promoCode.value=='stevekaku')
    {
       const discountPrice = totalPrice-(totalPrice*0.2);

    //    newTotalPrice.innerText= discountPrice;
       overAllPrice.innerText = discountPrice;
       promoCode.value='';
    }
    else
    {
        newTotalPrice.innerText=totalPrice;
        overAllPrice.innerText = totalPrice;
    }
     
}

// Get last Update price 

function getCurrentPrice(costType)
{
    const balanceTotal=document.getElementById(costType);
    const preBalance= parseFloat(balanceTotal.innerText);
    return preBalance;
   
}

// Handle Button Events  For Memory

document.getElementById('memory-btn-8gb').addEventListener('click',function()
{
    extraCost('memory-btn-8gb');
})
document.getElementById('memory-btn-16gb').addEventListener('click',function()
{
    extraCost('memory-btn-16gb');
})

// For Storage
document.getElementById('storage-btn-256gb').addEventListener('click',function()
{
    
    extraCost('storage-btn-256gb');
})
document.getElementById('storage-btn-512gb').addEventListener('click',function()
{
    
    extraCost('storage-btn-512gb');
})
document.getElementById('storage-btn-1024gb').addEventListener('click',function()
{
    
    extraCost('storage-btn-1024gb');
})


// For Delivery
document.getElementById('delivery-btn-free').addEventListener('click',function()
{
    
    extraCost('delivery-btn-free');
})
document.getElementById('delivery-btn-charge').addEventListener('click',function()
{
    
    extraCost('delivery-btn-charge');
})

// For Promo Code

document.getElementById('apply-btn').addEventListener('click',function()
{
    totalPrice();
})