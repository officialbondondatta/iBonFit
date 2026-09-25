export interface ISectionHeaderProps {
    details: {
        title: string,
        subTitle: string
    }
}

const SectionHeader = ({ details }: ISectionHeaderProps) => {
    return (
        <div className="flex flex-col space-y-2">
            <h2 className="lg:text-4xl text-2xl font-bold">{details.title}</h2>
            <p>{details.subTitle}</p>
        </div>
    );
};

export default SectionHeader;