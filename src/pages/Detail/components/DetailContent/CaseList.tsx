import { Fragment } from 'react';

export interface CaseItem {
  content: string;
  id: string;
  num: string;
  title: string;
}

interface Props {
  data: CaseItem[];
}

export const CaseList = (props: Props) => {
  const { data } = props;
  return (
    <section className="case-container">
      {data?.map((item) => {
        return (
          <Fragment key={item.id}>
            <h5 className="detail-small-title mb-4">{item.title}</h5>
            <iframe
              className="detail-iframe"
              src={item.content}
              title={item.title}
              frameBorder="0"
            />
          </Fragment>
        );
      })}
    </section>
  );
};
