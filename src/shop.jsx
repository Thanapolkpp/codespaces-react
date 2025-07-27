import { useState } from 'react';
import './shop.css';
export default function Shop() {
    const books =[
        { "id": 1, "title": "The Let Them Theory: A Life-Changing Tool That Millions of People Can't Stop Talking About", "author": "Mel Robbins", "image_url": "https://images-na.ssl-images-amazon.com/images/I/91I1KDnK1kL._AC_UL381_SR381,381_.jpg", "price": 11.69 },
        { "id": 2, "title": "Forgotten Home Apothecary : 250 Powerful Remedies at Your Fingertips", "author": "Dr. Nicole Apelian", "image_url": "https://images-na.ssl-images-amazon.com/images/I/91-E86oM2IL._AC_UL381_SR381,381_.jpg", "price": 37 },
        { "id": 3, "title": "Seven Things You Can't Say About China", "author": "Tom Cotton", "image_url": "https://images-na.ssl-images-amazon.com/images/I/81+mN748qkL._AC_UL381_SR381,381_.jpg", "price": 19.58 },
        { "id": 4, "title": "Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones", "author": "James Clear", "image_url": "https://images-na.ssl-images-amazon.com/images/I/81ANaVZk5LL._AC_UL381_SR381,381_.jpg", "price": 14.49 },
        { "id": 5, "title": "Sunrise on the Reaping (A Hunger Games Novel) (The Hunger Games)", "author": "Suzanne Collins", "image_url": "https://images-na.ssl-images-amazon.com/images/I/61o5Q8IIq4L._AC_UL254_SR254,254_.jpg", "price": 19.17 },
        { "id": 6, "title": "I Wish Someone Had Told Me . . .: The Best Advice for Building a Great Career and a Meaningful Life", "author": "Dana Perino", "image_url": "https://images-na.ssl-images-amazon.com/images/I/81AOHbxGNfL._AC_UL254_SR254,254_.jpg", "price": 20.30 },
        { "id": 7, "title": "How to Giggle: A Guide to Taking Life Less Seriously", "author": "Hannah Berner", "image_url": "https://images-na.ssl-images-amazon.com/images/I/81rO3vvG1mL._AC_UL254_SR254,254_.jpg", "price": 20.29 },
        { "id": 8, "title": "Strangers in Time: A World War II Novel", "author": "David Baldacci", "image_url": "https://images-na.ssl-images-amazon.com/images/I/816QI0pfuRL._AC_UL254_SR254,254_.jpg", "price": 17.84 }
    ];

    
    const [search, setSearch] = useState('');
    const [cart,setCart]= useState([]);
    const filterlist= books.filter(b => b.author.toLocaleLowerCase().includes(search.toLocaleLowerCase())||
          b.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())||
          b.price.toString().includes(search));
    const booklist = filterlist.map(b=>
        <div className='book-item'key={b.id}>
            <img className="book-image"src={b.image_url} alt={b.title} title={b.title}/>
            <div className="book-titel">{b.title}</div>
            <div className="book-author">{b.author}</div>
            <div className="book-price">{b.price} $</div>
            <button className="bt-addcart"onClick={()=>setCart([...cart,{"titel":b.title,"price":b.price}])}>Add to Cart</button>
        </div>)
    

    let cartTotal = 0;
    cart.forEach(b =>cartTotal += b.price);
    return (
        <>
        <header>
            <h1 className='Head'>Book Shop BY TNP</h1>
        <p className='motto'>Your never walk alone</p>
        <nav>  
            <a className="Home" href="3">Home</a>
            <a className="Shop" href="3">Shop</a>
            <a className="About" href="3">About</a>
            <a className="Contact" href="3">Contact</a>
        </nav>
        
        </header>
        
        
        <div className='page-container'> 
            
            <div className="search-box">Search :<input onChange={e=>setSearch(e.target.value)}/></div>
        
            <div className='book-contrainer'> {booklist}</div>
                 <br/>
                <div className="cart">♦️CART🛒</div>
                <div className="cart-contrainer">
                    <ol>{cart.map((b, i) => 
                        <li className="cart-item"key={i}>
                        <div className='book-title-cart'>{b.titel}</div>
                        <div className='book-price-cart'>{b.price} $</div>
                        </li>)}  
                    </ol>
            <div className="cart-total">Total: {cartTotal.toFixed(2)} $</div>
            <button className='bt-clarcart' onClick={()=>setCart([])}>Clear Cart</button></div>
        </div>

       
       

        </>
    );
}