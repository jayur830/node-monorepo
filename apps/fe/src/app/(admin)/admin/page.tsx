'use client';

import { cloneElement, PropsWithChildren, useEffect, useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { Button, Card, Grid, Input, styled, TextField, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import { useQuery } from '@tanstack/react-query';
import request from 'graphql-request';

import { ResumeQuery } from '@/graphql/graphql';
import GET_RESUME_QUERY from '@/graphql/queries/getResume.gql';

interface FormItemProps {
  label: string;
}

function FormItem({ label, children }: PropsWithChildren<FormItemProps>) {
  return (
    <Grid
      container
      alignItems="center"
      columnGap={2}
      marginBottom={2}
    >
      <Typography
        fontWeight={700}
        fontSize={16}
      >
        {label}
      </Typography>
      {children}
    </Grid>
  );
}

export default function Admin() {
  const { data } = useQuery<ResumeQuery>({
    queryKey: ['resume'],
    queryFn() {
      return request(process.env.NEXT_PUBLIC_API_URL, GET_RESUME_QUERY);
    },
  });

  const resumeData = useMemo(() => {
    if (!data) {
      return null;
    }

    return data.resume;
  }, [data]);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<{ title: string; github: string }>();
  console.log('rerender');

  useEffect(() => {
    setValue('title', resumeData?.title);
    setValue('github', resumeData?.github);
  }, [setValue, resumeData]);

  return (
    <Grid
      container
      flexDirection="column"
      gap={4}
      maxWidth={1000}
    >
      <SectionCard>
        <FormItem label="제목">
          <TextField
            variant="standard"
            placeholder="제목을 입력하세요."
            helperText={errors.title?.message}
            fullWidth
            {...register('title', { required: { value: true, message: '제목은 필수입니다.' } })}
          />
        </FormItem>
        <FormItem label="Github">
          <GithubInput
            variant="standard"
            placeholder="본인의 Github 주소를 입력하세요."
            helperText={errors.github?.message}
            {...register('github', { required: { value: true, message: 'Github 주소는 필수입니다.' } })}
          />
        </FormItem>
        <Grid
          container
          justifyContent="flex-end"
          paddingTop={2}
        >
          <Button
            variant="outlined"
            onClick={handleSubmit(console.log, console.log)}
          >
            Submit
          </Button>
        </Grid>
      </SectionCard>
    </Grid>
  );
}

const SectionCard = styled(Card)({
  boxShadow: `0 0 10px 3px ${grey['300']}`,
  padding: 20,
});

const GithubInput = styled(TextField)({
  maxWidth: 600,
  width: '100%',
});