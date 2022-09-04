import styles from "./Menu.module.css";
import cn from "classnames";
import React, { useContext } from "react";
import { AppContext } from "../../context/app.context";
import { FirstLevelMenuItem, PageItem } from "../../interfaces/menu.interface";
import CoursesIcon from "../../static/MenuIcons/courses.svg";
import ServicesIcon from "../../static/MenuIcons/services.svg";
import BooksIcon from "../../static/MenuIcons/books.svg";
import ProductsIcon from "../../static/MenuIcons/products.svg";
import { TopLevelCategory } from "../../interfaces/page.interface";

const firstLevelMenu: FirstLevelMenuItem[] = [
  {
    route: "courses",
    name: "Курсы",
    icon: <CoursesIcon />,
    id: TopLevelCategory.Courses,
  },
  {
    route: "services",
    name: "Сервисы",
    icon: <ServicesIcon />,
    id: TopLevelCategory.Services,
  },
  {
    route: "books",
    name: "Книги",
    icon: <BooksIcon />,
    id: TopLevelCategory.Books,
  },
  {
    route: "products",
    name: "Продукты",
    icon: <ProductsIcon />,
    id: TopLevelCategory.Products,
  },
];

export const Menu = (): JSX.Element => {
  const { menu, setMenu, firstCategory } = useContext(AppContext);

  const buildFirstLevel = () => {
    return (
      <React.Fragment>
        {firstLevelMenu.map((mn) => (
          <div key={mn.route}>
            <a href={`/${mn.route}`}>
              <div
                className={cn(styles.firstLevel, {
                  [styles.firstLevelActive]: mn.id == firstCategory,
                })}
              >
                {mn.icon}
                <span>{mn.name}</span>
              </div>
            </a>
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
          return (
            <div key={mn._id.secondCategory}>
              <div className={styles.secondLevel}>{mn._id.secondCategory}</div>
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
      <a
        href={`/${route}/${page.alias}`}
        className={cn(styles.thirdLevel, {
          [styles.thirdLevelActive]: false,
        })}
      >
        {page.category}
      </a>
    ));
  };

  return (
    <div className={styles.menu}>
      <ul>{buildFirstLevel()}</ul>
    </div>
  );
};
