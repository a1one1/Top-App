import styles from "./Menu.module.css";
import cn from "classnames";
import React, { useContext } from "react";
import { AppContext } from "../../context/app.context";
import { FirstLevelMenuItem, PageItem } from "../../interfaces/menu.interface";
import Link from "next/link";
import { useRouter } from "next/router";
import { firstLevelMenu } from "../../helpers/helpers";

export const Menu = (): JSX.Element => {
  const { menu, setMenu, firstCategory } = useContext(AppContext);
  const router = useRouter();

  const openedSecondLevel = (secondCategory: string) => {
    setMenu &&
      setMenu(
        menu.map((mn) => {
          if (mn._id.secondCategory === secondCategory) {
            mn.isOpened = !mn.isOpened;
          }
          return mn;
        })
      );
  };

  const buildFirstLevel = () => {
    return (
      <React.Fragment>
        {firstLevelMenu.map((mn) => (
          <div key={mn.route}>
            <Link href={`/${mn.route}`}>
              <a>
                <div
                  className={cn(styles.firstLevel, {
                    [styles.firstLevelActive]: mn.id == firstCategory,
                  })}
                >
                  {mn.icon}
                  <span>{mn.name}</span>
                </div>
              </a>
            </Link>

            {mn.id == firstCategory && buildSecondLevel(mn)}
          </div>
        ))}
      </React.Fragment>
    );
  };

  const buildSecondLevel = (menuItem: FirstLevelMenuItem) => {
    return (
      <div className={styles.secondBlock}>
        {menu.map((mn) => {
          if (
            mn.pages
              .map((page) => page.alias)
              .includes(router.asPath.split("/")[2])
          ) {
            mn.isOpened = true;
          }
          return (
            <div key={mn._id.secondCategory}>
              <div
                className={styles.secondLevel}
                onClick={() => openedSecondLevel(mn._id.secondCategory)}
              >
                {mn._id.secondCategory}
              </div>
              <div
                className={cn(styles.secondLevelBlock, {
                  [styles.secondLevelBlockOpened]: mn.isOpened,
                })}
              >
                {buildThirdLevel(mn.pages, menuItem.route)}
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  const buildThirdLevel = (pages: PageItem[], route: string) => {
    return pages.map((page) => (
      <Link href={`/${route}/${page.alias}`}>
        <a
          className={cn(styles.thirdLevel, {
            [styles.thirdLevelActive]:
              `/${route}/${page.alias}` === router.asPath,
          })}
        >
          {page.category}
        </a>
      </Link>
    ));
  };

  return (
    <div className={styles.menu}>
      <ul>{buildFirstLevel()}</ul>
    </div>
  );
};
