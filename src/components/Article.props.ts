import HeaderProps from "./Header.props";
import SectionProps from "./Section.props";
import FooterProps from "./Footer.props";

interface ArticleProps {
    header: HeaderProps;
    sections: SectionProps[];
    footer: FooterProps;
    id: string;
}

export default ArticleProps;
