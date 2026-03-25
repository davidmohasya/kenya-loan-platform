import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'YOUR_SUPABASE_URL';
const supabaseKey = 'YOUR_SUPABASE_KEY';
const supabase = createClient(supabaseUrl, supabaseKey);

// Fetch all loans
export const fetchLoans = async () => {
    const { data, error } = await supabase.from('loans').select('*');
    if (error) throw new Error(error.message);
    return data;
};

// Create a new loan
export const createLoan = async (loan) => {
    const { data, error } = await supabase.from('loans').insert([loan]);
    if (error) throw new Error(error.message);
    return data;
};

// Update an existing loan
export const updateLoan = async (id, updatedFields) => {
    const { data, error } = await supabase.from('loans').update(updatedFields).eq('id', id);
    if (error) throw new Error(error.message);
    return data;
};
