

import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import x from '@/styles/app.module.css';
import y from '@/styles/header.module.css';


export default function Home() {
  return (
      <div>
        <ul>
        {/* <li className={x['red']}>
          <Link href={"/register"}>
            <span className={y['red']}>Register</span>
          </Link>
        </li>

        <li style={{margin: "20px 0"}}>
          <Link href={"/login"}>
            <span >Login</span>
          </Link>
        </li> */}
        </ul>
    </div>
  );
}
