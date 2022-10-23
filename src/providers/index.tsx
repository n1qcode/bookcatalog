import { FC, JSXElementConstructor, PropsWithChildren, ReactNode } from 'react';

interface Props {
  providers: Array<[JSXElementConstructor<PropsWithChildren>, object?]>;
  children: ReactNode;
}

const ComposeProvider: FC<Props> = ({ children, providers }) => {
  const composed = providers.reduceRight(
    (acc, [Provider, props]) => <Provider {...props}>{acc}</Provider>,
    children
  );

  return <>{composed}</>;
};

export default ComposeProvider;