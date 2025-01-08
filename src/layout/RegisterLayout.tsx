import React, { ReactNode } from 'react';

const RegisterLayout: React.FC<{ children: ReactNode }> = ({ children }) => {

    return (
        <div className="dark:bg-boxdark-2 dark:text-bodydark">
            <div className="flex justify-center overflow-hidden">
                <main>
                    <div className="mx-auto max-w-screen-xl p-4 md:p-6 2xl:p-10">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    );
};

export default RegisterLayout;
