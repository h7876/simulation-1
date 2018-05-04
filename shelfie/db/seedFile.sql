drop table if exists products;

create table products (
    id serial primary key,
    item text,
    price float,
    photo text
);

insert into products 
(item, price, photo) 
values 
('Sleeping Bag', 35, 'http://www.patagonia.com/dis/dw/image/v2/ABBM_PRD/on/demandware.static/-/Sites-patagonia-master/default/dwb496e6f2/images/hi-res/70070_VIK_OM4.jpg?sw=750&sh=750&sm=fit&sfrm=png'),
('Tent', 70.20, 'https://i5.walmartimages.com/asr/6716444a-8eee-4dc8-ba98-3406eea6f587_1.a36e76a6bbaf2799db9df8a210585a12.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF'),
('Backpack', 22.80, 'https://images-na.ssl-images-amazon.com/images/I/71JwJA9LK3L._SY355_.jpg');
