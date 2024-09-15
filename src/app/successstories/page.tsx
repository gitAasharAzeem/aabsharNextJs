import SuccessHeader from '../../components/successstories/SuccessHeader';
import HighlightsSection from '../../components/successstories/HighlightsSection';
import StandardChartedBackground from '../../components/successstories/StandardChartedBackground';
import ProblemSolvingSection from '../../components/successstories/ProblemSolvingSection';

export default function SuccessStoriesPage() {
    return (
        <>
            <SuccessHeader />
            <HighlightsSection />
            <StandardChartedBackground />
            <ProblemSolvingSection />
            <ProblemSolvingSection />
        </>
    );
}
