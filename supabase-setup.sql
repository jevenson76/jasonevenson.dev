-- Create leads table for portfolio contact form
CREATE TABLE IF NOT EXISTS public.leads (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    email TEXT NOT NULL,
    company TEXT NOT NULL,
    budget TEXT NOT NULL,
    message TEXT NOT NULL,
    source TEXT DEFAULT 'portfolio_website',
    page TEXT DEFAULT 'home',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    status TEXT DEFAULT 'new',
    priority INTEGER DEFAULT 3,
    notes TEXT,
    follow_up_date TIMESTAMP WITH TIME ZONE,
    assigned_to TEXT
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_leads_email ON public.leads(email);
CREATE INDEX IF NOT EXISTS idx_leads_created_at ON public.leads(created_at);
CREATE INDEX IF NOT EXISTS idx_leads_status ON public.leads(status);
CREATE INDEX IF NOT EXISTS idx_leads_company ON public.leads(company);

-- Enable Row Level Security (RLS)
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

-- Create policy to allow inserts from authenticated and anonymous users
CREATE POLICY "Allow inserts for leads" ON public.leads
    FOR INSERT
    TO authenticated, anon
    WITH CHECK (true);

-- Create policy to allow reads for authenticated users only
CREATE POLICY "Allow reads for authenticated users" ON public.leads
    FOR SELECT
    TO authenticated
    USING (true);

-- Create policy to allow updates for authenticated users only
CREATE POLICY "Allow updates for authenticated users" ON public.leads
    FOR UPDATE
    TO authenticated
    USING (true)
    WITH CHECK (true);

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION public.handle_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = TIMEZONE('utc'::text, NOW());
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger to automatically update updated_at
CREATE TRIGGER handle_leads_updated_at
    BEFORE UPDATE ON public.leads
    FOR EACH ROW
    EXECUTE FUNCTION public.handle_updated_at();

-- Create a view for lead analytics
CREATE OR REPLACE VIEW public.lead_analytics AS
SELECT 
    DATE(created_at) as date,
    COUNT(*) as total_leads,
    COUNT(CASE WHEN budget = '50000+' THEN 1 END) as enterprise_leads,
    COUNT(CASE WHEN budget = '15000-50000' THEN 1 END) as mid_market_leads,
    COUNT(CASE WHEN budget = '5000-15000' THEN 1 END) as small_business_leads,
    COUNT(CASE WHEN budget = '1000-5000' THEN 1 END) as startup_leads,
    COUNT(CASE WHEN status = 'qualified' THEN 1 END) as qualified_leads,
    COUNT(CASE WHEN status = 'converted' THEN 1 END) as converted_leads
FROM public.leads
GROUP BY DATE(created_at)
ORDER BY date DESC;

-- Grant necessary permissions
GRANT USAGE ON SCHEMA public TO authenticated, anon;
GRANT INSERT ON public.leads TO authenticated, anon;
GRANT SELECT ON public.leads TO authenticated;
GRANT UPDATE ON public.leads TO authenticated;
GRANT SELECT ON public.lead_analytics TO authenticated;