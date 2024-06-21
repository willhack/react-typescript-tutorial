
const Component = (props: { config: {} }) => {
  return <div />;
};

/**
 * Why can I pass _anything_ to config?
 */
<>
  <Component
    config={{
      foo: "bar",
      whatever: {},
    }}
  />
</>;
type OneOrMany<TObj> = { [K in keyof TObj as TObj[K] extends undefined ? never : K]: TObj[K] }
type User = { firstName: string; lastName: string };
type TDataBase = {
  session?: string;
  task?: string;
  user?: User;
  account?: {};
};
type TData = OneOrMany<TDataBase>;
const Bar = { session: '1234' } satisfies TData; 
