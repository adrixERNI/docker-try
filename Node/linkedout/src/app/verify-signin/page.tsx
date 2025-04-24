import { Suspense } from "react"; // Import Suspense
import Container from "@/containers/Container";
import VerifySignInLoading from "@/modules/Common/VerifySignIn/VerifySignInLoading";

const VerifySignInPage = () => {
    return (
        <Container className="flex items-center justify-center min-h-screen py-5 lg:pb-20">
            <Container>
                <Suspense fallback={<div>Loading...</div>}>  {/* Add Suspense here */}
                    <VerifySignInLoading />
                </Suspense>
            </Container>
        </Container>
    );
};

export default VerifySignInPage;
