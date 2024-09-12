"use client";

import { FC, useEffect, useRef, useState } from "react";
import { useForm } from 'react-hook-form';  // Import the useForm hook
import { z } from 'zod';
import { JobformSchema } from '@/lib/form-schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { ArrowLeftIcon } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import FieldInput from '@/components/organisme/field-Input';
import { Input } from "@/components/ui/input"
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { JOBTYPES } from '@/constants';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import InputSkills from '@/components/organisme/inputSkills';
import CKEditor from '@/components/organisme/CKEditor';
import InputBenefit from "@/components/organisme/inputBenefits";
import { Button } from "@/components/ui/button";

interface PostJobPageProps { }

const PostJobPage: FC<PostJobPageProps> = ({}) => {
    const [ editorLoaded, setEditorLoaded ] = useState<boolean>(false)

    // Definisi default values dan validasi form
    const form = useForm<z.infer<typeof JobformSchema>>({
        resolver: zodResolver(JobformSchema),
        defaultValues: {
            requiredSkills: [],
        },
    });

    // Get the form data
    const onSubmit = (data: z.infer<typeof JobformSchema>) => {
        console.log(data);
    };

    // CKEditor
    useEffect(() => {
        setEditorLoaded(true)
    }, [])

    return (
        <div>
            <div className='inline-flex items-center gap-2 cursor-pointer hover:text-primary'>
                <ArrowLeftIcon className='w-7 h-7' />
                <span className='text-2xl font-semibold'>Post a Job</span>
            </div>
            <div className='my-5'>
                <div className='text-lg font-semibold'>Basic Information</div>
                <div className='text-gray-400'>List out your top perks and benefits</div>
            </div>

            <Separator />

            {/* This form create post Job */}
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className='mt-5 space-y-6 pt-6'>
                    {/* This input on job */}
                    <FieldInput title='Job Title' subtitle='Enter the job title'>
                        <FormField
                            control={form.control}
                            name="roles"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Input className='w-[450px]' placeholder="e.g Backend Engineer" {...field} />
                                    </FormControl>
                                    <FormDescription>
                                        At least 80 characters
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </FieldInput>

                    {/* This input on type job */}
                    <FieldInput title='Type on Employment' subtitle='You can select multiple type of employment'>
                        <FormField
                            control={form.control}
                            name="jobType"
                            render={({ field }) => (
                                <FormItem className="space-y-3">
                                    <FormControl>
                                        <RadioGroup
                                            onValueChange={field.onChange}
                                            defaultValue={field.value}
                                            className="flex flex-col space-y-1"
                                        >
                                            {JOBTYPES.map((item: string, i: number) => (
                                                <FormItem key={item + i} className="flex items-center space-x-3 space-y-0">
                                                    <FormControl>
                                                        <RadioGroupItem value={item} />
                                                    </FormControl>
                                                    <FormLabel className="font-normal">
                                                        {item}
                                                    </FormLabel>
                                                </FormItem>
                                            ))}
                                        </RadioGroup>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </FieldInput>

                    {/* This input on Salary */}
                    <FieldInput title='Salary' subtitle='Please specify the estimeed'>
                        <div className='w-[450px] flex flex-row justify-between items-center'>
                            <FormField
                                control={form.control}
                                name="salaryFrom"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Input className='w-full' placeholder="$100" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <span className='text-center'></span>
                            <FormField
                                control={form.control}
                                name="salaryTo"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Input className='w-full' placeholder="$5000" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>

                    </FieldInput>

                    {/* This input on Categories */}
                    <FieldInput title='Categories' subtitle='You can select categories'>
                        <FormField
                            control={form.control}
                            name="categoryId"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Select Job Categories</FormLabel>
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                        <FormControl>
                                            <SelectTrigger className='w-[450px]'>
                                                <SelectValue placeholder="Select a Job Categories" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            <SelectItem value="m@example.com">m@example.com</SelectItem>
                                            <SelectItem value="m@google.com">m@google.com</SelectItem>
                                            <SelectItem value="m@support.com">m@support.com</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </FieldInput>

                    {/* This Inpur on your Skill */}
                    <FieldInput title='Required Skills' subtitle='AddYou can select multiple skills'>
                        <InputSkills form={ form } />
                    </FieldInput>

                    {/* This CKEditor for use description on JOb */}
                    <FieldInput title='Job Description' subtitle='Job titles must a descr'>
                        <CKEditor form={ form } name="jobDescription" editorLoaded={ editorLoaded } />
                    </FieldInput>

                    {/* This CKEditor for use Responsible on JOb */}
                    <FieldInput title='Responsible' subtitle='Job titles must a descr'>
                        <CKEditor form={ form } name="responsibility" editorLoaded={ editorLoaded } />
                    </FieldInput>

                    {/* This CKEditor for use Who You Are on JOb */}
                    <FieldInput title='Who You Are' subtitle='Job titles must a descr'>
                        <CKEditor form={ form } name="whoYouAre" editorLoaded={ editorLoaded } />
                    </FieldInput>

                    {/* This CKEditor for use Who You Are on JOb */}
                    <FieldInput title='NIce To Haves' subtitle='Job titles must a descr'>
                        <CKEditor form={ form } name="niceToHaves" editorLoaded={ editorLoaded } />
                    </FieldInput>

                    <FieldInput title="Perks and Benefits" subtitle="This your benefits in send">
                            <InputBenefit form={form} />
                    </FieldInput>

                    <div className="flex justify-end">
                        <Button size="lg">Do a Riview</Button>
                    </div>
                </form>
            </Form>
        </div>
    );
};

export default PostJobPage;