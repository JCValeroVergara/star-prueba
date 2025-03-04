import { CantantesTable } from '../components/Cantantes.Table';
import { BannerLayout } from '../layout/BannerLayout';

export const CantantesPage = () => {
    return (
        <>
            <BannerLayout>
                <CantantesTable />
            </BannerLayout>
        </>
    );
};
