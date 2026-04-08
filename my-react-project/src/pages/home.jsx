import { Header } from '../src/components/Header';
import { P1LeftBody } from '../src/components/p1LeftBody';
import { P1RightBody } from '../src/components/p1RightBody';
import "./home.css";


export const Home = () => {
  return (
    <div class="pages">
    <Header />
    <P1LeftBody />
    <P1RightBody />
    </div>
  )
}