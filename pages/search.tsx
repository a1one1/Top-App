import { GetStaticProps } from "next";
import React from "react";
import { withLayout } from "../layout/Layout";
import axios from "axios";
import { IMenuItem } from "../interfaces/menu.interface";
import { API } from "../helpers/api";

function Search(): JSX.Element {
  return <React.Fragment>Search</React.Fragment>;
}

export default withLayout(Search);

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
