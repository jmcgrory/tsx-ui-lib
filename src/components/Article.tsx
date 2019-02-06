import React from 'react';
import ArticleProps from "./Article.props";
import Header from "./Header";
import Section from "./Section";
import Footer from "./Footer";
import SectionProps from "./Section.props";

const Article = ({header, sections, footer, id}: ArticleProps) => {

    const sectionMap = sections.map((section: SectionProps, index: number) => {
       return <Section {...section} key={`${id}-${index}`} />;
    });

    return <article className={'article'} id={id} key={id}>
        <Header {...header} />
        { sectionMap }
        <Footer {...footer}/>
    </article>;

}

export default Article;
