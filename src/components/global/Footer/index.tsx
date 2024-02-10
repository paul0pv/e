export default function Footer() {

  return (
    <footer className="footer items-center mx-auto p-4">
      <aside className="items-center grid-flow-col mx-auto md:m-0">
      <svg style={{color:"white"}} className="hidden md:flex md:w-14 md:h-18" viewBox="0 0 48 48" fill="white" xmlns="http://www.w3.org/2000/svg"><path d="M10.0642 24.0585C13.3515 22.9849 13.5293 18.9658 17.8609 18.1171C21.3261 17.4381 23.4076 19.8255 23.9251 22.361C24.3583 24.4829 23.0588 30 16.1283 30C7.46523 30 4.57754 24.4829 4 22.361C4.8663 23.2098 7.46523 24.9073 10.0642 24.0585Z" fill="#fdf2f3e" stroke="#333" strokeWidth="1" strokeLinejoin="round"></path><path d="M37.9358 24.0585C34.6485 22.9849 34.4707 18.9658 30.1391 18.1171C26.6739 17.4381 24.5924 19.8255 24.0749 22.361C23.6417 24.4829 24.9412 30 31.8717 30C40.5348 30 43.4225 24.4829 44 22.361C43.1337 23.2098 40.5348 24.9073 37.9358 24.0585Z" fill="white" stroke="#333" strokeWidth="1" strokeLinejoin="round"></path></svg>
        <div className="grid gap-2">
        <p>C. STRETT 111, CITY - COUNTRY - CEL: 987654321</p>
        <p>©2024 Hello World. All rights reserved.</p>
        </div>
      </aside>
      <nav className="grid-flow-col gap-4 mx-auto md:m-0 md:place-self-center md:justify-self-end">
        <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg>
        </a>
        <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
        <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
      </nav>
    </footer>
  );
}
