"use client";

import { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";
import { useRouter } from "next/navigation";
import { Session, User } from "@supabase/supabase-js";

export default function useAuth(): User | null {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: sessionData }) => {
      const session: Session | null = sessionData.session;
      if (!session) router.push("/auth/signin");
      else setUser(session.user);
    });
  }, [router]);

  return user;
}
