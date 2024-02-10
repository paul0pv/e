import { Header, NavigationButton, Footer, Offer, Hero, AboutUs, Promotions, Sample } from "../../components";
/**
import { useSelector } from "react-redux";
import { selectorEmployee, selectorUser } from "../../selectors/selector";
 */

export default function Home() {
  let route = "/login"

  {/**
  const user = useSelector(selectorUser);
  const employee = useSelector(selectorEmployee)

  if (user) route = `${user.email}/dashboard`
  if (employee) route = `admin-home`
*/}

  return (
    <main className="mx-auto">
      <Header route={route} />
      <Hero />
      <Promotions />
      <div className="divider mt-16"></div>
      <Offer />
      <div className="divider mb-5"></div>
      <Sample />
      <AboutUs />
      <div className="divider mt-20"></div>
      <NavigationButton route={route} />
      <Footer />
    </main>
  );
}
