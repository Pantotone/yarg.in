import AvatarPlaceholder from "@/assets/Images/Avatar.jpg";
import { Menu } from "lucide-react";
import Image from "next/image";
import styles from "./account-menu.module.css";

const AccountMenu = () => {
  const username = "Kadoodle";

  return ( 
    <section className={styles.container} >
      <Menu className={styles.icon} />
      <p className={styles.greeting}>
        Hey, <span>{username}</span>
      </p>
      <Image className={styles.avatar} src={AvatarPlaceholder} alt="Avatar" />
    </section>
  );
};

export default AccountMenu;