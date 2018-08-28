import React from "react";
import PropTypes from "prop-types";

import Card, { CardContent } from "material-ui/Card";

import Typography from "material-ui/Typography";

import Article from "../Main/Article";
import PageHeader from "./PageHeader";
import Content from "../Main/Content";
import {
  BarChart,
  XAxis,
  Tooltip,
  Legend,
  YAxis,
  CartesianGrid,
  Bar,
  ResponsiveContainer
} from "recharts";

const Page = props => {
  const { page } = props;
  const html = (page || {}).html;
  const data = [
    { name: "Javascript", percent: 80 },
    { name: "Laravel", percent: 70 },
    { name: "ROR", percent: 50 },
    { name: "Angular", percent: 70 },
    { name: "ReactJS", percent: 70 },
    { name: "VueJS", percent: 60 },
    { name: "React Native", percent: 70 }
  ];
  return (
    <Article>
      <PageHeader {...page.frontmatter} />
      <Content html={html} />
    </Article>
  );
};

Page.propTypes = {
  page: PropTypes.object.isRequired
};

export default Page;
