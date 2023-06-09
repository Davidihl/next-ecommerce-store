'use client';
import { useEffect } from 'react';

type Props = {
  title: string | undefined;
  description: string | undefined;
};

export default function UpdateMetaData(props: Props) {
  useEffect(() => {
    if (props.title) {
      document.title = props.title;
    }
    if (props.description) {
      // eslint-disable-next-line no-restricted-syntax
      document
        .querySelector('meta[name="description"]')
        ?.setAttribute('content', props.description);
    }
  }, [props.title, props.description]);
}
