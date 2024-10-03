import SuccessHeader from '../../components/successstories/SuccessHeader';
import HighlightsSection from '../../components/successstories/HighlightsSection';
import StandardChartedBackground from '../../components/successstories/StandardChartedBackground';
import ProblemSolvingSection from '../../components/successstories/ProblemSolvingSection';
import SuccessStoriesTitle from '../../components/successstories/SuccessStoriesTitle';
import BlogsSection from '../../components/BlogsSection';

export default function SuccessStoriesPage() {
    return (
        <>
            <SuccessHeader />
            <HighlightsSection />
            <StandardChartedBackground />
            <ProblemSolvingSection />
            <SuccessStoriesTitle title="SUCCESS STORIES"/>
            <BlogsSection />
        </>
    );
}
