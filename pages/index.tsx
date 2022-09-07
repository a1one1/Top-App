import { GetStaticProps } from "next";
import React, { useState } from "react";
import { Button, Htag, Input, Ptag, Rating, Tag, TextArea } from "../components";
import { withLayout } from "../layout/Layout";
import axios from "axios";
import { IMenuItem } from "../interfaces/menu.interface";
import { API } from "../helpers/api";

function Home({ menu }: HomeProps): JSX.Element {
  const [rating, setRating] = useState<number>(2);

  return (
    <React.Fragment>
      <Htag tag="h1">Children</Htag>
      <Button appearance="primary" arrow="right">
        Кнопка
      </Button>
      <Button appearance="ghost" arrow="down">
        Кнопка
      </Button>
      <Ptag size="small">маленький</Ptag>
      <Ptag size="average">средний</Ptag>
      <Ptag size="big">большой</Ptag>

      <Tag size="small">Ghost</Tag>
      <Tag size="big" color="red">
        Red
      </Tag>
      <Tag size="small" color="green">
        Green
      </Tag>
      <Tag size="big" color="primary">
        Primary
      </Tag>
      <Rating rating={rating} isEditable setRating={setRating} />
      <Input placeholder="тест" />
      <TextArea placeholder="textArea" />
    </React.Fragment>
  );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<IMenuItem[]>(
    API.topPage.find,
    {
      firstCategory,
    }
  );
  return {
    props: {
      menu,
      firstCategory,
    },
  };
};

interface HomeProps extends Record<string, unknown> {
  menu: IMenuItem[];
  firstCategory: number;
}
